import random
import string
import urllib.parse


def choose_receiver(giver, receivers):
    viable_receivers = receivers.copy()
    if giver in viable_receivers:
        viable_receivers.remove(giver)

    if len(viable_receivers) == 0:
        return (False, giver)
    else:
        return (True, random.choice(viable_receivers))


def make_pairs(names):
    givers = names.copy()
    receivers = givers.copy()

    pairs = []
    for giver in givers:
        (is_successful, receiver) = choose_receiver(giver, receivers)

        if is_successful:
            pairs.append((giver, receiver))
            receivers.remove(receiver)
        else:
            return make_pairs(names)
    return pairs

def random_url(length):
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(length))

def create_webpages(pairs):
    with open('./template.shtml') as template:
        text = template.read()

    for (giver, receiver) in pairs:
        if giver == 'index':
            raise Exception("'{}' is not an acceptable name".format(giver))
        giver_safe = urllib.parse.quote(giver).lower()
        new_filepath = './result/{}-{}.shtml'.format(giver_safe, random_url(20))

        modified_text = text.replace('RECEIVER', receiver)

        with open(new_filepath, 'w') as new_file:
            new_file.write(modified_text)

names = ['Balint', 'Benjamin', 'Izzy', 'JJ', 'Sid']
pairs = make_pairs(names)
create_webpages(pairs)
