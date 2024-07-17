const Checkbox = () => {
    const extensionData = [
        { name: "Extension 0", id: 0 },
        { name: "Extension 1", id: 1 },
        { name: "Extension 2", id: 2 },
        { name: "Extension 3", id: 3 },
    ];

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        const id = e.target.id;
        console.log({ isChecked, id });
    };

    return (
        <ol>
            {extensionData.map((ext) => {
                return (
                    <div key={ext.id} className="extensions">
                        <input type="checkbox" id={ext.id} name={ext.name} onClick={handleChange} />

                        <label>{ext.name}</label>
                    </div>
                );
            })}
        </ol>
    );
};

export default Checkbox;
