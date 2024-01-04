
function SkillCard({ skill }) {
    return (
        <div className="skill-card" >
            <button onClick={() => console.log("conect")}>
                <span>{skill}</span>
            </button>
        </div>


    )
}
export default SkillCard;