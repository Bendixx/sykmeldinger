import React from 'react';
import { Element } from 'nav-frontend-typografi';

import tekster from '../avvistsykmelding-tekster';
import { Sykmelding } from '../../../../types/sykmeldingTypes';

export const PASIENT_ELDRE_ENN_70 = 'PASIENT_ELDRE_ENN_70';
export const UKJENT_DIAGNOSEKODETYPE = 'UKJENT_DIAGNOSEKODETYPE';
export const UGYLDIG_KODEVERK_FOR_BIDIAGNOSE = 'UGYLDIG_KODEVERK_FOR_BIDIAGNOSE';
export const UGYLDIG_REGELSETTVERSJON = 'UGYLDIG_REGELSETTVERSJON';
export const BEHANDLER_IKKE_GYLDIG_I_HPR = 'BEHANDLER_IKKE_GYLDIG_I_HPR';
export const BEHANDLER_MANGLER_AUTORISASJON_I_HPR = 'BEHANDLER_MANGLER_AUTORISASJON_I_HPR';
export const BEHANDLER_IKKE_LE_KI_MT_TL_FT_I_HPR = 'BEHANDLER_IKKE_LE_KI_MT_TL_FT_I_HPR';
export const BEHANDLER_SUSPENDERT = 'BEHANDLER_SUSPENDERT';

interface BegrunnelserProps {
    sykmelding: Sykmelding;
}

const Begrunnelser = ({ sykmelding }: BegrunnelserProps) => {
    const reglerUtenBegrunnelse = [
        PASIENT_ELDRE_ENN_70,
        UGYLDIG_REGELSETTVERSJON,
        BEHANDLER_IKKE_GYLDIG_I_HPR,
        BEHANDLER_MANGLER_AUTORISASJON_I_HPR,
        BEHANDLER_IKKE_LE_KI_MT_TL_FT_I_HPR,
        BEHANDLER_SUSPENDERT,
    ];

    /* TODO:
    const visBegrunnelse = smSykmelding
        && smSykmelding.behandlingsutfall
        && smSykmelding.behandlingsutfall.ruleHits
        && !smSykmelding.behandlingsutfall.ruleHits.reduce((acc, ruleHit) => {
            return acc || reglerUtenBegrunnelse.includes(ruleHit.ruleName);
        }, false);
        */

    // TODO: Fyll begrunnelser
    const begrunnelser: string[] = [];

    if (begrunnelser.length === 1) {
        return (
            <div>
                <Element>{tekster['sykmelding.avvist.grunn']}</Element>
                <p>{begrunnelser[0]}</p>
            </div>
        );
    }

    if (begrunnelser.length > 1) {
        return (
            <div>
                <Element>{tekster['sykmelding.avvist.grunn']}</Element>
                <ul>
                    {begrunnelser.map((begrunnelse, index) => (
                        <li key={index.toString()}>{begrunnelse}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return null;
};

export default Begrunnelser;
