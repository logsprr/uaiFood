import React, { useEffect, useState } from 'react';

const Stars = ({ number, value, type }, rest) => {

    if (type == "full") {
        let rows = []
        for (let i = 0; i < number; i++) {
            rows.push(<i key={i} style={{ color: '#39b54a' }} class="fas fa-star"></i>)
        }
        return (
            <div {...rest}>
                {rows}
            </div>
        )
    } else {
        let rows = []
        for (let i = 0; i < number; i++) {
            rows.push(<i key={i} style={{ color: '#484848' }} class="far fa-star"></i>)
        }
        return (
            <div {...rest}>
                {rows}
            </div>
        )
    }

}

export default Stars;