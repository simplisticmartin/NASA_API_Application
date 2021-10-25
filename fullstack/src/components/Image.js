/** @format */

export const Image = ({ source }) => {
  return (
    <div>
      <img class="image" src={source} />
      <div>average: 4.9</div>
      <div>5:</div>
      <div>4:</div>
      <div>3:</div>
      <div>2:</div>
      <div>1:</div>
      <select name="rating" className="rating-input">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};
