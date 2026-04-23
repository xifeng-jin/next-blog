
import classNames from "classnames";
type Props = {
    className?: string;
    suffix?: string;
}

const API = "https://picsum.photos";
export default function BasicImg({ className , suffix}: Props) {
    if(suffix) {
        return <img className={classNames(className)} src={`${API}/id$/{suffix}`} />
    }
    return <img className={classNames(className)} src={`${API}/200/200`} />
}