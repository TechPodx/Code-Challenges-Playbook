function Menu({ onSelectVideo }) {

  const clickHandler = (event) => {
    const name = event.target.value;
    onSelectVideo(name);
  }

	return (
		  <form id="form" onClick={clickHandler}>
			  <input type="radio" name="src" value="fast"/> FAST
			  <input type="radio" name="src" value="slow" /> SLOW
			  <input type="radio" name="src" value="cute" /> CUTE
			  <input type="radio" name="src" value="eek" /> SPIDER
		  </form>
		);
};

export default Menu;