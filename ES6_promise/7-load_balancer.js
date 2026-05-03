/**
 * Returns the value from the fastest resolving Promise.
 *
 * @param {Promise} chinaDownload - Promise for China download
 * @param {Promise} USDownload - Promise for US download
 * @returns {Promise} Resolves with the fastest Promise result
 */
export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]);
}
