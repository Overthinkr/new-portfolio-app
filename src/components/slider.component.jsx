import ReactSlider from "react-slider";
import '../App.css'
const Slider = ({ onChange, currentIndex }) => {
    return (
        <ReactSlider
            className="vertical-slider"
            markClassName="mark"
            onChange={onChange}
            trackClassName="track"
            defaultValue={0}
            value={currentIndex}
            min={0}
            max={3}
            marks
            renderMark={(props) => {
                if (props.key < currentIndex) {
                    props.className = "mark mark-completed";
                } else if (props.key === currentIndex) {
                    props.className = "mark mark-active";
                }
                return <span {...props} />;
            }}
            orientation="vertical"
        />
    );
};

export default Slider;
