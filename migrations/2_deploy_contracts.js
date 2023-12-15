var TokenizedVickeryAuction = artifacts.require(src/TokenizedVickeryAuction.sol);
module.exports = function(deployer) {
deployer.deploy(TokenizedVickeryAuction);
};