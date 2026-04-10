import "./Card.css";

interface Props{
    img: string,
    name: string,
    level: string,
}

function Card({img, name, level}: Props){
    return(
        <>

        <div className="col-lg-3 col-md-4 col-sm-6 g-4">
            <div className={`card align-items-center card-${level?.toLowerCase()}`}>
                <img src={img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{level}</p>
                </div>
            </div>
        </div>
        </>
    );

}

export default Card;