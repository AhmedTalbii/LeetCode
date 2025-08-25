package main

type Node struct {
	Val       int
	Neighbors []*Node
}

var (
	visited = make(map[*Node]bool)
)

func cloneGraph(node *Node) *Node {
	Cl := Clone(node)
	return Cl
}

func Clone(node *Node) *Node {
	Cl := &Node{
		
	}
	return Cl
}
func main() {
	Node1 := &Node{
		Val:       1,
		Neighbors: []*Node{},
	}
	Node2 := &Node{
		Val:       2,
		Neighbors: []*Node{},
	}
	Node3 := &Node{
		Val:       3,
		Neighbors: []*Node{},
	}
	Node4 := &Node{
		Val:       4,
		Neighbors: []*Node{},
	}
	Node1.Neighbors = []*Node{Node2, Node4}
	Node2.Neighbors = []*Node{Node1, Node3}
	Node3.Neighbors = []*Node{Node2, Node4}
	Node4.Neighbors = []*Node{Node1, Node3}
	cloneGraph(Node1)
}
