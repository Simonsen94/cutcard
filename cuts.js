import React from 'react';

const Cuts = ({cuts, deleteCut}) => {

    const cutList = cuts.length ? (
        cuts.map(cut => {
            return (
                <div className="collection-item" key={cut.id}>
                    <span onClick={() => {deleteCut(cut.id)}}>{cut.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">Du har ikke flere klip tilbage</p>
    )
    return (
        <div className="cuts collection">
        {cutList}
        </div>
    )
}
export default Cuts