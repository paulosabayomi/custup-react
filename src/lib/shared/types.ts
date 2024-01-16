import {ICustUpOptions as IRCustUpOptions} from "custup/types/types"
import NTCustUp from 'custup/src/custup'
import React from "react";

export interface ICustUpOptions extends IRCustUpOptions {
    id: string; // The id of the root element, used for creating unique instances
    ref?: React.Ref<TCustUp>;
}

export type TCustUp = NTCustUp