const Noodl = require('@noodl/noodl-sdk');

Noodl.defineNode({
    name: 'CustomInput', // Nama node yang akan muncul di editor Noodl
    category: 'Input', // Kategori tempat node akan ditampilkan di editor
    color: 'green', // Warna node di editor
    inputs: {
        // Input untuk node, misalnya nilai default atau placeholder
        placeholder: { type: 'string', displayName: 'Placeholder', default: 'Enter text here...' },
        value: { type: 'string', displayName: 'Value', default: '' }
    },
    outputs: {
        // Output dari node, misalnya nilai yang diinput oleh pengguna
        value: { type: 'string', displayName: 'Value' }
    },
    signals: {
        // Sinyal, misalnya ketika nilai berubah
        onValueChanged: { displayName: 'On Value Changed' }
    },
    setup: function(inputs, outputs, signalOutput) {
        // Fungsi setup, di sini Anda dapat menginisialisasi node
        // Misalnya, menyiapkan event listener untuk perubahan nilai input

        this.onInputChange = function(name, value) {
            if(name === 'value') {
                outputs.value = value; // Set output
                signalOutput('onValueChanged'); // Kirim sinyal bahwa nilai telah berubah
            }
        };
    },
    initialize: function() {
        // Fungsi initialize, dipanggil saat node dibuat
    }
});
