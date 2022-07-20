import { IProps } from "../types/common";


interface AppLayout extends IProps{}

export const AppLayout = (props:AppLayout)=>{
    const {children} = props;
    return(
        <div>
            {children}
        </div>
    )
}