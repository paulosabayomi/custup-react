import {ICustUpOptions as IRCustUpOptions} from "custup/types/types"
import NTCustUp from 'custup/src/custup'
import React from "react";
import { TEventNames } from "custup/utils/eventNames";

export interface ICustUpOptions extends Omit<IRCustUpOptions, "targetRootElement"> {
    id: string; // The id of the root element, used for creating unique instances
    ref?: React.Ref<TCustUp>;
    on?: Array<{callbackFn: (e: Event & {detail: any}) => void; type: TEventNames}>;
}

export type TCustUp = NTCustUp;