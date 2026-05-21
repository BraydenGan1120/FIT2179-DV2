{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Choropleth Map of AI Readiness Index of the World",
    "width": 1000,
    "height": 500,
    "projection": {"type": "equalEarth"},
    "data": {
        "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/world-110m.json",
        "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
    },
    "transform": {
        "lookup": "properties.iso_a3",
        "from": {
            "data": {
    }
}
