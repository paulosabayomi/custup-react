import React from 'react';
import { ICustUpOptions as ICustUpOptions$1 } from 'custup/types/types';
import NTCustUp from 'custup/src/custup';

interface ICustUpOptions extends ICustUpOptions$1 {
    id: string;
    ref?: React.Ref<TCustUp>;
}
type TCustUp = NTCustUp;

declare const CustUp: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<ICustUpOptions, "ref"> & React.RefAttributes<unknown>>>;

export { type ICustUpOptions, type TCustUp, CustUp as default };
