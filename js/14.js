function main(depth) {
    let day = 1;
    for (distance = 7; distance < depth; distance += 7) {
        if (depth >= distance) {
            ++day;
            distance -= 2;
            console.log(distance)
        } else if (depth <= distance) {
            break;
        }
        console.log(day);
    }
}
    main(42)