import './index.scss'
import {Sidebar} from "../Sidebar";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="app-content">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet />
                <span className="tags bottom-tags">
          &lt;/body&gt;
                    <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
            </div>
        </div>
    )
}
