const Card = ({children}) => {
    return(
        <>
            <div data-cy='activity-item' className="shadow-slate-200 shadow-lg rounded-2xl overflow-hidden bg-white w-72 ml-20 mt-8">
                {children}
            </div>
        </>
    );
}

const Title = ({children}) => {
    return(
        <>
            <div className="p-8">
                <h1 data-cy='activity-item-title' className="text-xl font-semibold">{children}</h1>
            </div>
        </>
    );
}

const Body = ({children}) => {
    return(
        <>
            <div className="leading-relaxed p-14">
                {children}
            </div>
        </>
    );
}

const Footer = ({children}) => {
    return(
        <>
            <div data-cy='activity-card-footer' className="bg-white p-4 text-slate-500">
                {children}
            </div>
        </>
    );
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;