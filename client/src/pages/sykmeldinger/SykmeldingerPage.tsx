import React from 'react';
import { Undertittel, Normaltekst } from 'nav-frontend-typografi';
import Header from '../commonComponents/Header/Header';
import Brodsmuler from '../commonComponents/Breadcrumbs/Breadcrumbs';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import Spinner from '../commonComponents/Spinner/Spinner';
import LenkepanelContainer from './components/LenkepanelContainer';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import Lenke from 'nav-frontend-lenker';
import TilHovedsiden from '../commonComponents/TilHovedsiden/TilHovedsiden';
import useSykmeldinger from '../commonComponents/hooks/useSykmeldinger';

const SykmeldingerPage: React.FC = () => {
    document.title = 'Sykmeldinger - www.nav.no';

    const { isLoading, error, data: sykmeldinger } = useSykmeldinger();

    if (isLoading) {
        return <Spinner headline="Henter dine sykmeldinger" />;
    }

    if (error || sykmeldinger === undefined) {
        return (
            <>
                <Header title="Dine sykmeldinger" />
                <div className="limit">
                    <Brodsmuler
                        breadcrumbs={[
                            {
                                title: 'Sykefravær',
                                path: `${process.env.REACT_APP_SYKEFRAVAER_ROOT}`,
                            },
                            {
                                title: 'Sykmeldinger',
                            },
                        ]}
                    />
                    <AlertStripeAdvarsel>
                        <Undertittel>Beklager, vi har problemer med baksystemene for øyeblikket.</Undertittel>
                        <Normaltekst>Det kan ta litt tid å rette opp feilen. Vennligst prøv igjen senere!</Normaltekst>
                    </AlertStripeAdvarsel>
                    <TilHovedsiden />
                </div>
            </>
        );
    }

    const apenSykmeldinger = sykmeldinger.filter((sykmelding) => sykmelding.sykmeldingStatus.statusEvent === 'APEN');
    const pastSykmeldinger = sykmeldinger.filter((sykmelding) => sykmelding.sykmeldingStatus.statusEvent !== 'APEN');

    return (
        <>
            <Header title="Dine sykmeldinger" />
            <div className="limit">
                <Brodsmuler
                    breadcrumbs={[
                        {
                            title: 'Sykefravær',
                            path: `${process.env.REACT_APP_SYKEFRAVAER_ROOT}`,
                        },
                        {
                            title: 'Sykmeldinger',
                        },
                    ]}
                />
                <LenkepanelContainer type="NYE_SYKMELDINGER" sykmeldinger={apenSykmeldinger} />
                <Ekspanderbartpanel tittel="Ser du ikke sykmeldingen din her?">
                    <Normaltekst className="margin-bottom--1">
                        Det betyr at den som har sykmeldt deg ikke sender den digitalt til NAV. Da bruker du
                        papirsykmeldingen i stedet.
                    </Normaltekst>
                    <Lenke href="https://www.helsedirektoratet.no/veiledere/sykmelderveileder/sykmelding-og-erklaeringer">
                        Mer informasjon om papirsykmelding finner du her.
                    </Lenke>
                </Ekspanderbartpanel>
                <LenkepanelContainer type="TIDLIGERE_SYKMELDINGER" sykmeldinger={pastSykmeldinger} />
                <TilHovedsiden />
            </div>
        </>
    );
};

export default SykmeldingerPage;
