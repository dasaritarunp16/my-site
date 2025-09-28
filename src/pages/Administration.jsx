export default function Administration() {


   
    return (
        <>
        <section className= "hero">
            <div className = "overlay" > </div>
            <h1 className ="hero-title"> Membership</h1>
        </section>
        <nav className = "AU-navbar">
            <ul className = "subCats">
                <li className="open">
                    <a href="#History" className="nav-link">Requirements</a>
                    <div className="paragraph card-grid">
                        <div className="card">
                            <ul>
                                <li>Maintain GPA 3.0+</li>
                                <li>Currently enrolled in at least 
                                    the 2nd class in your CTAE pathway</li>
                            
                            </ul>
                        </div>
                       
                    </div>
                </li>



                <li className="open">
                    <a href="#History" className="nav-link">Links</a>
                    <div className="paragraph card-grid">
                        <div className="card">
                        
                            <ul>
                                <li>
                                    <a href="https://docs.google.com/forms/d/1n6inL29t6Ey4E2RYOofzqBJPZ2GAnxeavf7HsSnfT1w/edit#response=ACYDBNinkWqCBPVPm8uorgKuWiMNJeE1m5XBZ0hBGcQi1a_pt0PKpZBgrdvL0JNGbZWyU2c" target= "_blank" >
                                        Membership - Click here
                                    </a>
                                </li>
                                <li>
                                    <a href="https://horror-hacks-2025.devpost.com/" target= "_blank" >
                                        Horror Hacks - Click here
                                    </a>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </li>
                
            </ul>
        </nav>
        </>
    );

    }