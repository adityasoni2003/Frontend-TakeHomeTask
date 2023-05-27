import Card from "./Card"

const TestimonialCrousel = ()=>{

    let box = document.querySelector('.testimonials');


    const preButtonClick =()=>{
        let width = box.clientWidth ;
        box.scrollLeft = box.scrollLeft - width;

    }
    const postButtonClick =()=>{
        let width = box.clientWidth ;
        box.scrollLeft = box.scrollLeft + width;

    }
    return (
        <div className="crousel">
            <h1>Testimonials</h1>
            <button className="pre btn" onClick={preButtonClick}><p>&lt;</p></button>
            <button className="post btn" onClick={postButtonClick}><p>&gt;</p></button>

            <div className="testimonials">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </div>
    )
}
export default TestimonialCrousel