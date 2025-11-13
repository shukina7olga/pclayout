document.addEventListener("DOMContentLoaded", () => {
	const earnedElement = document.querySelector(
		".course__progress-label .course__number"
	);
	const progressElement = document.querySelector(
		".course__progress-element progress"
	);

	const targetValue = 400000;
	const maxValue = parseInt(progressElement.max, 10);

	let currentValue = 0;
	const duration = 2000;
	const fps = 60;
	const totalFrames = (duration / 1000) * fps;
	const increment = targetValue / totalFrames;

	function formatNumber(num) {
		return num.toLocaleString("ru-RU") + "₽";
	}

	function animate() {
		currentValue += increment;

		if (currentValue >= targetValue) {
			currentValue = targetValue;
		}

		earnedElement.textContent = formatNumber(Math.floor(currentValue));
		progressElement.value = currentValue;

		if (currentValue < targetValue) {
			requestAnimationFrame(animate);
		}
	}

	earnedElement.textContent = "0₽";
	progressElement.value = 0;
	requestAnimationFrame(animate);
});
