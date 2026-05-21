
const specUrl = 'js/Choropleth_GAIRI.json';
const fileMap = {
    '2025': 'https://raw.githubusercontent.com/BraydenGan1120/FIT2179-DV2/main/data/2025-GAIRI-data-1.csv',
    '2024': 'https://raw.githubusercontent.com/BraydenGan1120/FIT2179-DV2/main/data/2024-GAIRI-data.csv',
    '2023': 'https://raw.githubusercontent.com/BraydenGan1120/FIT2179-DV2/main/data/2023-GAIRI-data.csv'
};
let baseSpec = null;

async function loadBaseSpec() {
    const resp = await fetch(specUrl);
    baseSpec = await resp.json();
    updateEmbed(document.getElementById('yearSelect').value);
}

function updateEmbed(year) {
    if (!baseSpec) return;
    const spec = JSON.parse(JSON.stringify(baseSpec));
    if (spec.transform && spec.transform[0] && spec.transform[0].from && spec.transform[0].from.data) {
        spec.transform[0].from.data.url = fileMap[year];
    }
    vegaEmbed('#choropleth', spec, {actions: false}).catch(function(err){
        console.error('Vega embed error:', err);
    });
}

document.getElementById('yearSelect').addEventListener('change', function(e){
    updateEmbed(e.target.value);
});

loadBaseSpec().catch(err => console.error('Failed to load spec:', err));
