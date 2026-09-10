import {Bookmark} from 'lucide-react'
const card=()=>{
    return(
        <div className="card">
            <div className="top">
                <img src="data:image/webp;base64,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" alt="" />
                <button>Save <Bookmark size={12} /></button>
            </div>
            <div className="center">
                <h3>Amazone <span>5 Days ago...</span></h3>
                <h2>Python full stack developer</h2>
                <div className="tag">
                    <p>Full time</p>
                    <p>junior level</p>
                </div>
            </div>
            <div className="buttom">
                <div>
                <h3>$140/hour</h3>
                <p>Shimla</p>
                </div>
                <button>Apply</button>
            </div>
        </div>

    )
}

export default card