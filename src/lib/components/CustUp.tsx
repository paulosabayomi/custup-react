import React from "react";
import MCustUp from 'custup'
import { ICustUpOptions, TCustUp } from "../shared";
import "custup/src/all.min.css"

const CustUp = React.memo(React.forwardRef((options: ICustUpOptions, ref) => {
    const _instance_Ref = React.useRef<TCustUp | null>(null);

    const _initialize_custup = React.useCallback(() => {
        if (_instance_Ref.current == null) {
                const _c_inst = new MCustUp({
                ...options,
                targetRootElement: "#" + options.id
            });
            _instance_Ref.current = _c_inst;
        }
    }, [_instance_Ref.current])

    React.useLayoutEffect(() => {
        if (!ref) {
            _initialize_custup()
        };
    }, [_instance_Ref.current]);

    React.useImperativeHandle(ref, () => {
        _initialize_custup()
        return (_instance_Ref.current as TCustUp);
      }, [_instance_Ref.current]);

    return (
        <div id={options.id}>
            CustUp: hmm looks like there is a conflicting id, 
            please change the id of the current component.
        </div>
    )
}));

export default CustUp