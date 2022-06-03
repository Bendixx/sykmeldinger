import { AlertStripeInfo, AlertStripeSuksess } from 'nav-frontend-alertstriper';
import { Element, Systemtittel } from 'nav-frontend-typografi';

import { Behandlingsutfall } from '../../models/Sykmelding/Behandlingsutfall';
import { SykmeldingStatus } from '../../models/Sykmelding/SykmeldingStatus';
import { toReadableDate } from '../../utils/dateUtils';

interface StatusBannerProps {
    sykmeldingStatus: SykmeldingStatus;
    behandlingsutfall: Behandlingsutfall;
    egenmeldt?: boolean | null;
}

const StatusBanner: React.FC<StatusBannerProps> = ({ sykmeldingStatus, behandlingsutfall, egenmeldt = false }) => {
    if (behandlingsutfall.status === 'INVALID') {
        if (sykmeldingStatus.statusEvent === 'BEKREFTET') {
            return (
                <AlertStripeInfo>
                    Du bekreftet at du har lest at sykmeldingen er avvist den{' '}
                    {toReadableDate(sykmeldingStatus.timestamp)}
                </AlertStripeInfo>
            );
        }
    }

    if (sykmeldingStatus.statusEvent === 'SENDT') {
        return (
            <AlertStripeSuksess>
                <Systemtittel tag="h2">
                    Sykmeldingen ble sendt til {sykmeldingStatus.arbeidsgiver?.orgNavn}
                </Systemtittel>
                <Element>{toReadableDate(sykmeldingStatus.timestamp)}</Element>
            </AlertStripeSuksess>
        );
    }

    if (sykmeldingStatus.statusEvent === 'BEKREFTET') {
        return (
            <AlertStripeSuksess>
                <Systemtittel tag="h2">{egenmeldt ? 'Egenmelding' : 'Sykmelding'}en ble sendt til NAV</Systemtittel>
                <Element>{toReadableDate(sykmeldingStatus.timestamp)}</Element>
            </AlertStripeSuksess>
        );
    }

    return null;
};

export default StatusBanner;
