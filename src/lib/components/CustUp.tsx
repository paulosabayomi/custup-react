import React from "react";
import MCustUp from 'custup';
import { ICustUpOptions, TCustUp } from "../shared";
import "custup/src/all.min.css";

const CustUp = React.memo(React.forwardRef((options: ICustUpOptions, ref) => {
    const _instance_Ref = React.useRef<TCustUp | null>(null);

    const _initialize_custup = React.useCallback(() => {
        if (_instance_Ref.current != null) return _instance_Ref.current;
        _instance_Ref.current = new MCustUp({
            ...options,
            targetRootElement: "#" + options.id
        });
        options.on?.forEach(ev => _instance_Ref.current?.on(ev.type, ev.callbackFn));
        return _instance_Ref.current;
    }, [_instance_Ref.current]);

    React.useLayoutEffect(() => {
        if (!ref) _initialize_custup();
    }, []);

    React.useImperativeHandle(ref, () => {
        return _initialize_custup();
    }, [])

    return (
        <div id={options.id}>
            CustUp: hmm looks like there is a conflicting id, 
            please change the id of the current component.
        </div>
    )
}));

export default CustUp;