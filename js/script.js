const form = document.getElementById("form");
const result = document.getElementById("#result");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	const gender = document.querySelector("#gender");
	const age = document.querySelector("#age");
	const weight = document.querySelector("#weight");
	const height = document.querySelector("#height");
	const activityLevel = document.querySelector("#activity_level");

    const Age = age.value;
    const Gender = gender.value;
    const Weight = weight.value;
    const Height = height.value;
    const ActivityLevel = activityLevel.value;

    let tbm;
	if(Gender === "male") {
        tbm = 66 + (13.8 * Weight) + (5 * Height) - (6.8 * Age);
    } else {
        tbm = 655 + (99.6 * Weight) +  (1.8 * Height) - (4.7 * Age);
    }
 
    let layout = `
        <h2>O resultado do formulário é:</h2>
        <p>O seu metabolismo basal é <span class="texto">${tbm.toFixed(2)}</span></p>
    `;

    const result = document.getElementById('result');

    result.innerHTML = layout;

    result.classList.add('active');
}
