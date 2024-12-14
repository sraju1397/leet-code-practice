def find_zig_zag_sequence(aq, nn):
    aq.sort()
    mid = nn // 2
    aq[mid], aq[nn - 1] = aq[nn - 1], aq[mid]

    st = mid + 1
    ed = nn - 2
    while st <= ed:
        aq[st], aq[ed] = aq[ed], aq[st]
        st = st + 1
        ed = ed - 1

    for i in range (nn):
        if i == nn-1:
            print(aq[i])
        else:
            print(aq[i], end =' ')
    return

test_cases = int(input())
for cs in range (test_cases):
    n = int(input())
    a = list(map(int, input().split()))
    find_zig_zag_sequence(a, n)
