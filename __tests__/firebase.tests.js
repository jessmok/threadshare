describe('Firebase Tests', () => {
    test('Gets admins', async (done) => {
        done();
    });
});

/*describe('handleSignUp', () => {
    it('successfully invokes function', async () => {
        const wrapped = test.wrap(functions.handleSignUp);
        const data = {
            email: 'test-email@gmail.com',
            password: 'test-password',
        };
        await wrapped({
            data: () => ({
                name: 'test-user',
            }),
            ref: {
                set: jest.fn(),
            },
        });
    });
});

const mockQueryResponse = jest.fn();
mockQueryResponse.mockResolvedValue([
    {
        id: 1,
    },
]);

jest.mock('firebase-admin', () => ({
    initializeApp: jest.fn(),
    firestore: () => ({
        collection: jest.fn((path) => ({
            where: jest.fn((queryString) => ({
                get: mockQueryResponse,
            })),
        })),
    }),
}));*/
