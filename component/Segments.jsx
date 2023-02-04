const Segments = ({ checks, onClick }) => {
    return (
        <div className="segments-wrapper">
            {checks.forEach(({ value, key }) => <label className={key ? "active" : "inactive"} key={value} onClick={() => onClick(value)}>{value}</label>)}
        </div>
    );
}

export default Segments;