const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Choropleth Map of AI Readiness Index of the World",
    "width": 1000,
    "height": 500,
    "projection": {"type": "equalEarth"},
    "data": {
        "url": "https://github.com/BraydenGan1120/FIT2179-DV2/blob/main/maps/Australia.json",
        "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
    },
    "transform": [
        {
            "lookup": "name",
            "from": {
                "data": {
                    "url": "https://github.com/BraydenGan1120/FIT2179-DV2/blob/main/data/2025-GAIRI-data-1.csv"
                },
                "key": "Country",
                "fields": ["Government AI Readiness Index"]
            }
        }
    ]
};

export default spec;
