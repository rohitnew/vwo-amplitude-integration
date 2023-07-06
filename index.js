function VWOAmplitudePlugin(amplitude){
    window.VWO = window.VWO || []
    window.VWO.push([
        "onVariationApplied",
        function (data) {
            if (!data) return;
            const expId = data[1];
            const variationId = data[2];
            const _vis_data = {};
            if (
                expId &&
                variationId &&
                ["VISUAL_AB", "VISUAL", "SPLIT_URL"].indexOf(window._vwo_exp[expId].type) > -1
            ) {
                _vis_data["VWO-Test-ID-" + expId] = window._vwo_exp[expId].comb_n[variationId];
                const key = "VWO-Test-ID-" + expId;
                let identify = new amplitude.Identify();
                identify.set(key, _vis_data[key]);
                amplitude.getInstance().identify(identify);
                amplitude.getInstance().logEvent("VWO", _vis_data);
            }

        },
    ])
}

export default VWOAmplitudePlugin