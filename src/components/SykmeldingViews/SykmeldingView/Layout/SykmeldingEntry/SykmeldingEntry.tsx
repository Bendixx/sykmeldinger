import cn from 'clsx';
import { BodyShort, Heading } from '@navikt/ds-react';

import SladdSvg from '../../Svg/SladdSvg';

import styles from './SykmeldingEntry.module.css';

interface SykmeldingEntryProps {
    title: string;
    headingLevel?: '1' | '2' | '3' | '4' | '5' | '6';
    mainText: string;
    subText?: string | null;
    small?: boolean;
    sladd?: boolean;
}

function SykmeldingEntry({
    title,
    headingLevel = '3',
    mainText,
    subText,
    small,
    sladd = false,
}: SykmeldingEntryProps): JSX.Element {
    if (small) {
        return (
            <div className={styles.sykmeldingEntry}>
                <Heading className={styles.heading} size="small" level={headingLevel}>
                    {title}
                </Heading>
                {sladd ? <SladdSvg /> : <BodyShort size="small">{mainText}</BodyShort>}
            </div>
        );
    }

    return (
        <div className={cn(styles.sykmeldingEntry)}>
            <Heading className={styles.heading} size="small" level={headingLevel}>
                {title}
            </Heading>
            {sladd ? <SladdSvg /> : <BodyShort size="small">{mainText}</BodyShort>}
            {!!subText && <BodyShort size="small">{subText}</BodyShort>}
        </div>
    );
}

export default SykmeldingEntry;
