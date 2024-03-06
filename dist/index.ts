import React from 'react';
import { ICustUpOptions as ICustUpOptions$1 } from 'custup/types/types';
import NTCustUp from 'custup/src/custup';
import { TEventNames } from 'custup/utils/eventNames';

interface ICustUpOptions extends Omit<ICustUpOptions$1, "targetRootElement"> {
    id: string;
    ref?: React.Ref<TCustUp>;
    on?: Array<{
        callbackFn: (e: Event & {
            detail: any;
        }) => void;
        type: TEventNames;
    }>;
}
type TCustUp = NTCustUp;

declare const CustUp: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<ICustUpOptions, "ref"> & React.RefAttributes<unknown>>>;

export { type ICustUpOptions, type TCustUp, CustUp as default };
