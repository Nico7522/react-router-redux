import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { progressActionBegin } from "../../store/actions/progressv2.action";

const ProgressBar = ({val}) => {
    const dispatch = useDispatch()
    const { start, current, end } = useSelector(state => state.progress)
    useEffect(() => {
        dispatch(progressActionBegin(val))
    }, [])

    return (
    <p>ProgressBar : </p>
    )
}

export default  ProgressBar;