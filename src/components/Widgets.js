import React from 'react'

import '../styles/Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr&tabs=timeline&width=340&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="700"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="codelearn.io">
            </iframe>
        </div >
    )
}


export default Widgets;
