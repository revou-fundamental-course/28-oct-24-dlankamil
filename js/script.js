function validateForm() {
  let beratBadan = document.getElementById('berat-badan').value;

  if (beratBadan == '') {
    alert('Kolom berat badan harus diisi!');
  } else if (parseInt(beratBadan) < 0) {
    alert('Berat badan harus berupa angka yang positif!');
  } else if (parseInt(beratBadan) <= 0 || parseInt(beratBadan) == -0) {
    alert('Berat badan tidak bisa nol, masukkan nilai yang valid!');
  } else {
    document.getElementById('result').innerHTML = beratBadan;
  }

  console.log(beratBadan);
}

console.log(document.getElementById('result').innerHTML);
