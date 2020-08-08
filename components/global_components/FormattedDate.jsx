import React from 'react';
import { format } from 'date-fns';
import { useConfig } from '../../context/globalSettings';

const FormattedDate = ({ dateToFormat }) => {
    const [{ dateFormat }] = useConfig();
    return <span>{format(new Date(dateToFormat), dateFormat)}</span>;
};

export function formatDate(dateToFormat) {
    const [{ dateFormat }] = useConfig();
    return format(new Date(dateToFormat), dateFormat);
}

export default FormattedDate;
