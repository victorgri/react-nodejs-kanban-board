import { useRef } from "react"

export const Comments = () => {
  const commentRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(commentRef.current.value);
  }
  return (
    <div className="comments__container">
      <form className="comment__form" onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <textarea
          type="text"
          name="comment"
          id="comment"
          placeholder="Type your comments"
          required
          ref={commentRef}
        ></textarea>
        <button className="comentBtn">ADD COMMENT</button>
      </form>

      <div className="comments__section">
        <h2>Existing comments</h2>
      </div>
    </div>
  )
}


