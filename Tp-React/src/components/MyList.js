

function MyList(props) {
    return (
    <div>
        <div>
            <li>
                <h2>{props.data.name}</h2>
                <div>{props.data.age}</div>
            </li>
        </div>
    </div   >
    );
};

export default MyList;