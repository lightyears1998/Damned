import { Node } from "./node";

abstract class ContainerNode extends Node {
	protected children = [];

	public refresh() {
		for (let x = 0; x < this.children.length; x++) {
			this.children[x].refresh();
		}

		this.draw();
	}

	public append(element) {
		this.children.push(element);

		return element;
	}
}

export { ContainerNode };
