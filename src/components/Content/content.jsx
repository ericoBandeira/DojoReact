import './styles.css';
import maxlindo from './maxlindo.jpg'

export function Content(){
    return(
        <div className="ContentCss">
            <div>
                <div>
                    <p>Life</p>
                    <img src={maxlindo} alt="max" id="alt" />
                </div>
                <p style={{fontSize: "10rem",fontWeight: "bold", margin:"0"}}>Balance</p>
            </div>
            <div>
                <p style={{lineHeight:"24px"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Cum accusamus unde inventore corporis totam assumenda tenetur?<br/> Cupiditate aliquid officiis nemo, neque ea maiores!<br/> Temporibus corporis dignissimos, ratione ex voluptatem modi?
                </p>
            </div>
            <button>
               <p>Get Started</p> 
            </button>
            <div >
                <p style={{fontSize:"3rem",fontWeight:"bold"}}>+100 exercises  |  120 hours</p>
            </div>
        </div>
    );
}