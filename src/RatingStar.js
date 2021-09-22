import React from "react";

export function RatingStar({ rating }) {
    return parseInt(rating) / 5 === 1 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 4 === 1 && parseFloat(rating) % 4 !== 0 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star-half-o" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 4 === 1 && parseFloat(rating) % 4 === 0 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 3 === 1 && parseFloat(rating) % 3 !== 0 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star-half-o" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 3 === 1 && parseFloat(rating) % 3 === 0 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 2 === 1 && parseFloat(rating) % 2 !== 0 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star-half-o" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 2 === 1 && parseFloat(rating) % 2 === 0 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 1 === 1 && parseFloat(rating) % 1 !== 0 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            <i className="fa fa-star-half-o" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 1 === 1 && parseFloat(rating) % 1 === 0 ? (
        <>
            <i className="fa fa-star" style={{ color: "gold" }}></i>
        </>
    ) : parseInt(rating) / 0 === 1 && parseFloat(rating) % 0 !== 0 ? (
        <>
            <i className="fa fa-star-half-o" style={{ color: "gold" }}></i>
        </>
    ) : '';
}
