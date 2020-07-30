const goodNodes  = require('../src/1448');

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

test('leetcode 1448 - 1', () => {
    let root = new TreeNode(3,
            new TreeNode(1,
                new TreeNode(3,
                    null,
                    null
                ),
                null
                ),
            new TreeNode(
                4,
                new TreeNode(1,
                    null,
                    null
                ),
                new TreeNode(5,
                    null,
                    null
                ),
            )
        );
    
    expect(goodNodes(root)).toBe(4);
});

test('leetcode 1448 - 2', () => {
    let root = new TreeNode(3,
        new TreeNode(3,
            new TreeNode(4,
                null,
                null
            ),
            new TreeNode(2,
                null,
                null
            ),
        ),
        null
    );

    expect(goodNodes(root)).toBe(3);
});

test('leetcode 1448 - 3', () => {
    let root = new TreeNode(-1,
        new TreeNode(5,
            new TreeNode(4,
                null,
                null
            ),
            new TreeNode(4,
                new TreeNode(-4,
                    new TreeNode(0,
                        new TreeNode(3,
                            null,
                            null
                        ),
                        null
                    ),
                    null
                ),
                null
            )
        ),
        new TreeNode(
            -2,
            new TreeNode(2,
                new TreeNode(-2,
                    null,
                    new TreeNode(-1,
                        null,
                        null
                    )
                ),
                new TreeNode(3,
                    new TreeNode(-3,
                        null,
                        null
                    ),
                    null
                )
            ),
            new TreeNode(-2,
                null,
                new TreeNode(-2,
                    new TreeNode(-4,
                        null,
                        null
                    ),
                    new TreeNode(-3,
                        new TreeNode(3,
                            null,
                            null
                        ),
                        new TreeNode(-3,
                            null,
                            null
                        )
                    )
                )
            )
        )
    );

    expect(goodNodes(root)).toBe(5);
});
