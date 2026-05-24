const urlParams = new URLSearchParams(window.location.search);

const nama = urlParams.get('nama') || '...';
const kelas = urlParams.get('kelas') || '...';
const prodi = urlParams.get('prodi') || '...';

document.getElementById('statement-text').innerHTML = 
    `Dengan ini saya, <b>${nama}</b> dari program studi <b>${prodi}</b> kelas <b>${kelas}</b>, menyatakan siap mengikuti kegiatan <b>Submission Programming Tadulako Batch Orion 2026</b> secara formal dan bersungguh-sungguh.`;