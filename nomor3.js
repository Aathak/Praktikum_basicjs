let tinggiCm = 170;

let beratKg = 90;

let tinggiM = tinggiCm / 100; //mengubah cm ke m

let bmi = beratKg / (tinggiM * tinggiM);

let status;
if (bmi < 18.5) {
    status = "Kekurangan berat badan";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal (ideal)";
} else if (bmi >= 25 && bmi <= 29.9) {
    status = "Kelebihan berat badan";
} else {
    status = "Kegemukan (Obesitas)";
}

console.log("Status BMI Anda: " +  status );
