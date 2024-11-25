import Link from "next/link"
import { useRouter } from "next/router"

export default function MobileMenu({ handleToggle, isToggled }) {
    const router = useRouter()

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${isToggled ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search…" /><i className="fi-rr-search" />
                                </form>
                            </div>
                            <div className="mobile-menu-wrap mobile-header-border">
                                {/* mobile menu start*/}
                                <nav>
                                    <ul className="main-menu">
                                        <li> <Link className={router.pathname == "/" ? "dashboard2 active" : "dashboard2"} href="/"><img src="assets/imgs/page/dashboard/dashboard.svg" alt="jobBox" /><span className="name">Dashboard</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/candidates" ? "dashboard2 active" : "dashboard2"} href="/candidates"><img src="assets/imgs/page/dashboard/candidates.svg" alt="jobBox" /><span className="name">Candidates</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/recruiters" ? "dashboard2 active" : "dashboard2"} href="/recruiters"><img src="assets/imgs/page/dashboard/recruiters.svg" alt="jobBox" /><span className="name">Recruiters</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/my-job-grid" ? "dashboard2 active" : "dashboard2"} href="/my-job-grid"><img src="assets/imgs/page/dashboard/jobs.svg" alt="jobBox" /><span className="name">My Jobs</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/my-tasks-list" ? "dashboard2 active" : "dashboard2"} href="/my-tasks-list"><img src="assets/imgs/page/dashboard/tasks.svg" alt="jobBox" /><span className="name">Tasks List</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/profile" ? "dashboard2 active" : "dashboard2"} href="/profile"><img src="assets/imgs/page/dashboard/profiles.svg" alt="jobBox" /><span className="name">My Profiles</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/my" ? "dashboard2 active" : "dashboard2"} href="/my-resume"><img src="assets/imgs/page/dashboard/cv-manage.svg" alt="jobBox" /><span className="name">CV Manage</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/settings" ? "dashboard2 active" : "dashboard2"} href="/settings"><img src="assets/imgs/page/dashboard/settings.svg" alt="jobBox" /><span className="name">Setting</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/authentication" ? "dashboard2 active" : "dashboard2"} href="/authentication"><img src="assets/imgs/page/dashboard/authentication.svg" alt="jobBox" /><span className="name">Authentication</span></Link>
                                        </li>
                                        <li> <Link className={router.pathname == "/login" ? "dashboard2 active" : "dashboard2"} href="/login"><img src="assets/imgs/page/dashboard/logout.svg" alt="jobBox" /><span className="name">Logout</span></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li><Link href="/#">Profile</Link></li>
                                    <li><Link href="/#">Work Preferences</Link></li>
                                    <li><Link href="/#">Account Settings</Link></li>
                                    <li><Link href="/#">Go Pro</Link></li>
                                    <li><Link href="/page-signin">Sign Out</Link></li>
                                </ul>
                                <div className="mb-15 mt-15"> <Link className="btn btn-default icon-edit hover-up" href="/post-job">Post Job</Link></div>
                            </div>
                            <div className="site-copyright">Copyright {new Date().getFullYear()} © JobBox. <br />Designed by AliThemes.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
