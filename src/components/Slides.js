import React, { useState } from "react";

function Slides({ slides }) {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	function handleNext() {
		currentSlideIndex < slides.length - 1 &&
			setCurrentSlideIndex(currentSlideIndex + 1);
	}

	function handlePrevious() {
		currentSlideIndex > 0 && setCurrentSlideIndex(currentSlideIndex - 1);
	}

	function handleRestart() {
		currentSlideIndex !== 0 && setCurrentSlideIndex(0);
	}

	return (
		<div>
			<div id='navigation' className='text-center'>
				<button
					data-testid='button-restart'
					className='small outlined'
					onClick={handleRestart}
					disabled={currentSlideIndex === 0}
				>
					Restart
				</button>
				<button
					data-testid='button-prev'
					className='small'
					onClick={handlePrevious}
                    disabled={currentSlideIndex === 0}
				>
					Prev
				</button>
				<button
					data-testid='button-next'
					className='small'
					onClick={handleNext}
                    disabled={currentSlideIndex === slides.length - 1}
				>
					Next
				</button>
			</div>
			<div id='slide' className='card text-center'>
				<h1 data-testid='title'>{slides[currentSlideIndex].title}</h1>
				<p data-testid='text'>{slides[currentSlideIndex].text}</p>
			</div>
		</div>
	);
}

export default Slides;
