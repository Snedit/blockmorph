// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    struct Repository {
        string name;
        address owner;
        mapping(address => bool) collaborators;
        string code;
    }

    mapping(string => Repository) public repositories;

    function createRepository(string memory _name, string memory _code) public {
        require(bytes(repositories[_name].name).length == 0, "Repository already exists");
        repositories[_name] = Repository(_name, msg.sender, new mapping(address => bool), _code);
    }

    function addCollaborator(string memory _name, address _collaborator) public {
        require(msg.sender == repositories[_name].owner, "Only owner can add collaborators");
        repositories[_name].collaborators[_collaborator] = true;
    }

    function removeCollaborator(string memory _name, address _collaborator) public {
        require(msg.sender == repositories[_name].owner, "Only owner can remove collaborators");
        delete repositories[_name].collaborators[_collaborator];
    }

    function updateCode(string memory _name, string memory _newCode) public {
        require(msg.sender == repositories[_name].owner || repositories[_name].collaborators[msg.sender], "Unauthorized access");
        repositories[_name].code = _newCode;
    }

    function getCode(string memory _name) public view returns (string memory) {
        return repositories[_name].code;
    }
}
